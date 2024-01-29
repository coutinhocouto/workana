"use client";

import Breakfy from "@/components/organisms/Breakfy";
import store from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  
  return (
    <Provider store={store}>
      <Breakfy />
    </Provider>
  );
}
