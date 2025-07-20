import { Mail, Linkedin } from "lucide-react";

function Contact() {
  return (
    <div className="bg-black text-white h-full w-full flex flex-col items-center justify-center">
      <div className="p-8 max-w-xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Contact</h1>

        <div className="space-y-2">
          <p className="text-lg">Me joindre par email :</p>
          <div className="space-y-1">
            <a href="mailto:Frederic.Kah@eurecom.fr" className="text-primary hover:underline">
              Frederic.Kah@eurecom.fr - mon adresse mail étudiant
            </a>
            <br />
            <a href="mailto:frederic.kah.ndf.a@gmail.com" className="text-primary hover:underline">
              frederic.kah.ndf.a@gmail.com - mon adresse mail professionnelle
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-lg">Me retrouver sur LinkedIn :</p>
          <a
            href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-kah-7213a1354/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <Linkedin className="mr-2" />
            Mon profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
