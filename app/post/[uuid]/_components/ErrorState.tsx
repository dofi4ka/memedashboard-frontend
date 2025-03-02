interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="bg-destructive/10 text-destructive p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Ошибка</h2>
        <p>{error || "Мем не найден"}</p>
      </div>
    </div>
  );
}
