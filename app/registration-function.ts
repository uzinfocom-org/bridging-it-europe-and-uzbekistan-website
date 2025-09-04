"use server";

import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

export const saveToSpreadsheets = async (formData: FormData) => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_DOCS_EMAIL ?? "",
    key: process.env.GOOGLE_DOCS_KEY ?? "",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    process.env.GOOGLE_DOCS_ID ?? "",
    serviceAccountAuth,
  );

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const row = [
    formData.get("fullName"),
    formData.get("companyPosition"),
    formData.get("emailPhone"),
    formData.get("country"),
    formData.get("type"),
    new Date(),
  ].map((value) => (value ? value.toString() : ""));

  await sheet.addRow(row);
};
