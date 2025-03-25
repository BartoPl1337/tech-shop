"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import useMounted from "@/hooks/use-mounted";
import { Skeleton } from "./ui/skeleton";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useMounted();

  if (!mounted) return <Skeleton className="w-9 h-9 rounded-xl" />;
  return (
    <Button variant={"ghost"} size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
