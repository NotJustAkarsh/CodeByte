"use client";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <div>
      <div className="hidden md:block h-screen w-50 border-r">
        <DashboardSideBar />
      </div>
      <div className="block md:hidden">
        <DashboardSideBarMobile />
      </div>
    </div>
  );
};

export default LeftSideBar;

const DashboardSideBar = () => {
  return (
    <div className="h-full px-4 py-6">
      <nav>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <LayoutDashboard className="w-5 h-5 mr-2" />
            Overview
          </Button>
        </Link>
        <Link href={"/articles"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" />
            Articles
          </Button>
        </Link>
        <Link href={"/comments"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <MessageCircle className="w-5 h-5 mr-2" />
            Comments
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <BarChart className="w-5 h-5 mr-2" />
            Analiytics
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
};

const DashboardSideBarMobile = () => {
  return (
    <div className="h-full px-4 py-6 border-r w-20">
      <nav className="h-full">
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <LayoutDashboard className="w-5 h-5 mr-2" />
          </Button>
        </Link>
        <Link href={"/dashboard/articles"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" />
          </Button>
        </Link>
        <Link href={"/comments"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <MessageCircle className="w-5 h-5 mr-2" />
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <BarChart className="w-5 h-5 mr-2" />
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <Settings className="w-5 h-5 mr-2" />
          </Button>
        </Link>
      </nav>
    </div>
  );
};
