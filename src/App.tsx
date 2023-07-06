import QrCodeCard from "./components/QrCodeCard";

const qrCode = {
  image: "/image-qr-code.png",
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

function App() {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center bg-[hsl(212_45%_89%)] p-5">
      <QrCodeCard qrCode={qrCode} />
    </div>
  );
}
export default App;
