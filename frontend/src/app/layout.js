import "./globals.css";

export const metadata = {
  title: "Grand Fantasia",
  description: "Servidor Privado de Grand Fantasia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
