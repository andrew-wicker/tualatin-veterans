import mongoose, { Schema, Document, model } from "mongoose";
import { faker } from "@faker-js/faker";

const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@tualatin-veterans-membe.atksfvm.mongodb.net/tualatin-veterans`;

export interface IMemberDocument extends Document {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  streetAddress: string;
  streetAddress2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  emailAddress: string;
}

const memberSchema: Schema = new Schema<IMemberDocument>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  streetAddress: { type: String, required: true },
  streetAddress2: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  emailAddress: { type: String, required: true },
});

export const MemberModel = model<IMemberDocument>("Member", memberSchema);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });

const generateFakeMembers = async () => {
  try {
    const fakeMembers: Partial<IMemberDocument>[] = Array.from(
      { length: 10 },
      () => ({
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        dateOfBirth: faker.date.birthdate().toLocaleDateString(),
        streetAddress: faker.location.streetAddress(),
        streetAddress2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        emailAddress: faker.internet.email(),
      })
    );

    console.log("first index of fakeMembers: ", fakeMembers[0]);

    await MemberModel.insertMany(fakeMembers);
    console.log("Fake members created successfully");
  } catch (error) {
    console.error("Error creating fake members: ", error);
  }
};

// generateFakeMembers();
