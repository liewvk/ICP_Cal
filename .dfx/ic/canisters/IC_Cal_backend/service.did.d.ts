import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'add' : ActorMethod<[bigint, bigint], bigint>,
  'divide' : ActorMethod<[bigint, bigint], [] | [bigint]>,
  'multiply' : ActorMethod<[bigint, bigint], bigint>,
  'subtract' : ActorMethod<[bigint, bigint], bigint>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
