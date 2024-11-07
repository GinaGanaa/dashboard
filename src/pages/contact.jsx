import { contacts } from "@/utils/contact/contact";
import { Contact } from "@/components/contact/Contact";

export default function Page() {
  return (
    <div className="p-[30px]">
      <div className="flex justify-between">
        <h2 className="text-[32px] font-medium">Contact</h2>
        <button className="w-[147px] h-[48px] bg-[#4379EE] text-white rounded-[6px] text-[14px]">
          Add New Contact
        </button>
      </div>
      <div className="flex gap-[30px] flex-wrap pt-[30px]">
        {contacts.map((contact) => (
          <Contact contact={contact} />
        ))}
      </div>
    </div>
  );
}
