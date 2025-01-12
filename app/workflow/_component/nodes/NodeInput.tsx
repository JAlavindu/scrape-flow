export function NodeInputs({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
}

export function NodeInput({ input }: { input: any }) {
  return (
    <div className="flex justify-start relative p-3 bg-secondary">
      {input.name}
    </div>
  );
}
