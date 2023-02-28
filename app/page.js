import Box from "@/components/Box";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center w-screen mt-10 flex-col">
        <Nav />
        <Box/>
      </div>
    </main>
  );
}
