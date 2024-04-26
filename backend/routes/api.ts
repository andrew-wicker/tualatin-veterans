import express, { Request, Response } from "express";
import memberController from "../controllers/memberController";

const router = express.Router();

router.get("/query", memberController.queryMembers, (req, res) => {
  res.status(200).json(res.locals.queryResults);
});

router.get("/:id", memberController.getMemberById, (req, res) => {
  res.status(200).json(res.locals.member);
});

router.get("/", memberController.getMembers, (req, res) => {
  res.status(200).json(res.locals.members);
});

router.post("/", memberController.createMember, (req, res, next) => {
  console.log("New member added");
});

router.patch("/:id", memberController.updateMember, (req, res) => {
  console.log("Member Updated");
  res.status(200).json(res.locals.updatedMember);
});

router.delete("/:id", memberController.deleteMember, (req, res) => {
  res.status(200).json(res.locals.deletedMember);
});

export default router;
