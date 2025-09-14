import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/system";

export default function Providers({
    children,
}: {
    children : React.ReactNode
}) {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}   