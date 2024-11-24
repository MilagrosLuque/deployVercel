import RegisterForm from "@/components/RegisterForm"

export default function Register() {
  return (
    <div className="font-inter overflow-hidden relative">
      <section
        className="flex justify-center relative bg-cover bg-center bg-no-repeat w-full h-screen"
        style={{ backgroundImage: "url('/login.jpg')" }}
      >
        <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
          <div className="rounded-2xl bg-white shadow-xl">
            <RegisterForm />
          </div>
        </div>
      </section>
    </div>
  );
}