import Form from '@/components/Form';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-600">
      <section className="bg-black p-24">
        <Header />
        <Form />
      </section>
    </main>
  );
}
