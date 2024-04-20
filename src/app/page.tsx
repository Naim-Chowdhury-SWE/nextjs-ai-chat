import Chat from "./components/chat";
import Footer from "./components/footer";

export const runtime = "edge";

export default function Page() {
  return (
    <div className="h-screen">
      <Chat />
      <Footer />
    </div>
  );
}
