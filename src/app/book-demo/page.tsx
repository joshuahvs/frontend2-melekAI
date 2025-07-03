import Navbar from "@/components/NavbarServerWrapper";
import Footer from "@/components/Footer";
import BookDemoClient from "@/components/BookDemoClient";

export default function BookDemoPage() {
  return (
    <div>
      <Navbar />
        <BookDemoClient />
      <Footer />
    </div>
  );
}
