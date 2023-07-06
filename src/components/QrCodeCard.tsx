interface QrCode {
  title: string;
  description: string;
  image: string;
}

function QrCodeCard({ qrCode }: { qrCode: QrCode }) {
  return (
    <div className="max-w-md text-center bg-white rounded-xl flex p-10 flex-col gap-6 drop-shadow-md">
      <img src={qrCode.image} alt="QR code" className="rounded-xl" />
      <h1 className="text-3xl font-bold text-[hsl(218_44%_22%)]">
        {qrCode.title}
      </h1>
      <p className="text-xl text-[hsl(220_15%_55%)]">{qrCode.description}</p>
    </div>
  );
}
export default QrCodeCard;
