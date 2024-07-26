import Image from "next/image";
import { Button } from "@/components/ui/button";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto  ">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo "
            width={1000}
            height={1000}
            className=" mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="text-dark-600 justify-item xl:text-left">
              {" "}
              © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin?
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        alt="onboarding image"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
