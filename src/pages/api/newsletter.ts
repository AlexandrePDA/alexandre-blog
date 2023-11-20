import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("dans back");
  const { email } = req.body;

  try {
    await prisma.userEmail.create({
      data: {
        email,
      },
    });
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
}
