export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'divide' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Opt(IDL.Nat)], []),
    'multiply' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Nat], []),
    'subtract' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
