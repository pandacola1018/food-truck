import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MainLayout } from "./component/layouts/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
