import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
  const headerList = headers();
  console.log(headerList);
  return NextResponse.json({
    name:'jamal',
    id:1,
    address:'Dhaka'
  });
}