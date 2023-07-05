import Image from "next/image";
import styles from "./page.module.css";
import Paragraph from "@/ui/Paragraph";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-red-500">
      <Paragraph size="sm" />
      Hello world
    </main>
  );
}
