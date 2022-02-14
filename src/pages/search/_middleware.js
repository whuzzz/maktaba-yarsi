import { NextResponse } from "next/server";

export default function middleware(req) {
  if (!req.nextUrl.search) {
    return NextResponse.redirect("/");
  }
}
