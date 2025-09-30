import Image from "next/image"

export const OfficialPartnerSection: React.FC = () => {
  return <section className="container mx-auto relative z-10 mt-48">
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">Official partner</h2>
    <a href="https://www.x-infotech.com/" target="_blank">
      <Image
        className="mx-auto"
        src="/xinfotech-logo.svg"
        alt="X Infotech"
        width={295}
        height={65}
      />
    </a>
  </section>
}
