import { emails } from "@/utils/inbox/email";
import { EmailList } from "./EmailList";

export const Email = () => {
  return (
    <table>
      <tbody>
        {emails.map((email) => {
          return (
            <EmailList
              sender={email.sender}
              label={email.label}
              title={email.title}
              date={email.date}
              isStared={email.isStared}
              isSelected={email.isSelected}
              email={email}
            />
          );
        })}
      </tbody>
    </table>
  );
};
