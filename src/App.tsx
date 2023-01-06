import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/HomePage";
import { Content } from "./components/Content";
import { Page } from "./components/Page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <HashRouter basename={"/"}>
      <Header />
      <Content>
        <Page>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
          </Routes>
        </Page>
      </Content>
    </HashRouter>
  </QueryClientProvider>
  );
}

export default App;
