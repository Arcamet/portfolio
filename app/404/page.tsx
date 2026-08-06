import type { Metadata } from "next";
import { NotFoundContent } from "../components/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found — Jose Carlos Arce Camet",
};

export default function FourOhFourPage() {
  return <NotFoundContent />;
}
