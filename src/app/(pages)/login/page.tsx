import LoginForm from "@/components/LoginForm"

export default function Login() {
  
  return (
    <div className="font-inter overflow-hidden relative">
      <section
        className="flex justify-center relative bg-cover bg-center bg-no-repeat w-full h-screen"
        style={{ backgroundImage: "url('/login.jpg')" }}
      >
        <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
          <div className="rounded-2xl bg-white shadow-xl">
            <LoginForm/>
          </div>
        </div>
      </section>
    </div>
  );
}
