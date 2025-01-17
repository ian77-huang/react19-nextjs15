import React from "react";

import { View } from "./view";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = Readonly<{ params: {} }>;

export default function Page({}: Props) {
  return (
    <>
      <View />
    </>
  );
}
