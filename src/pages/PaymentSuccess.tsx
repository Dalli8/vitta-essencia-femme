import Header from "@/components/Header";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Pagamento confirmado</h1>
          <p className="text-muted-foreground mb-8">
            Obrigado pela sua compra! Enviamos a confirmação para o seu e-mail.
          </p>
          <a href="/" className="underline">Voltar à página inicial</a>
        </article>
      </main>
    </div>
  );
};

export default PaymentSuccess;
