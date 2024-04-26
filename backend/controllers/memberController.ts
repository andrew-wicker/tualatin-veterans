import { Request, Response, NextFunction } from "express";
import { MemberModel, IMemberDocument } from "../models/member";

interface MemberController {
  getMembers: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getMemberById: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | IMemberDocument>;
  createMember: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | IMemberDocument>;
  updateMember: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | IMemberDocument | null>;
  deleteMember: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | IMemberDocument | null>;
  queryMembers: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | IMemberDocument | IMemberDocument[] | null>;
}

const memberController: MemberController = {
  async getMembers(req, res, next) {
    try {
      const members = await MemberModel.find();
      res.locals.members = members;
      next();
    } catch (error) {
      next({
        log: `memberController.getMembers: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.getMembers. Check server logs for details.",
        },
      });
    }
  },
  async getMemberById(req, res, next) {
    const memberId = req.params.id;
    try {
      const member = await MemberModel.findById(memberId);
      if (!member) {
        res.status(404).json({ message: "Member not found" });
      }
      res.locals.member = member;
      next();
    } catch (error) {
      next({
        log: `memberController.getMemberById: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.getMemberById. Check server logs for details.",
        },
      });
    }
  },
  async createMember(req, res, next) {
    try {
      const newMember: IMemberDocument = new MemberModel(req.body);
      const createdMember = await newMember.save();
      res.locals.newMember = createdMember;
      res.status(201).json(createdMember);
      next();
    } catch (error) {
      next({
        log: `memberController.createMember: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.createMember. Check server logs for details.",
        },
      });
    }
  },
  async updateMember(req, res, next) {
    const memberId = req.params.id;
    const updateData = req.body;
    try {
      const updatedMember = await MemberModel.findByIdAndUpdate(
        memberId,
        updateData,
        { new: true }
      );
      if (!updatedMember) {
        res.status(404).json({ message: "Member not found" });
      }
      res.locals = { updatedMember };
      next();
    } catch (error) {
      next({
        log: `memberController.updateMember: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.updateMember. Check server logs for details.",
        },
      });
    }
  },
  async deleteMember(req, res, next) {
    const memberId = req.params.id;
    try {
      const deletedMember = await MemberModel.findByIdAndDelete(memberId);
      if (!deletedMember) {
        res.status(404).json({ message: "Member not found" });
      }
      res.locals = { deletedMember };
      next();
    } catch (error) {
      next({
        log: `memberController.updateMember: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.updateMember. Check server logs for details.",
        },
      });
    }
  },
  async queryMembers(req, res, next) {
    console.log("queryMembers");
    try {
      const query = req.query;
      console.log("query: ", query);
      const queryResults = await MemberModel.find(query);
      console.log("query results: ", queryResults);

      res.locals.queryResults = queryResults;
      next();
    } catch (error) {
      next({
        log: `memberController.updateMember: ERROR: ${
          typeof error === "object" ? JSON.stringify(error) : error
        }`,
        message: {
          error:
            "Error occured in memberController.updateMember. Check server logs for details.",
        },
      });
    }
  },
};

export default memberController;
