import type { FC } from "react";

import { Knight } from "./Knight";

export interface PieceProps {
  type?: string;
}

export const Piece: FC<PieceProps> = ({ type }) =>
  type ? <Knight type={type} /> : null;
