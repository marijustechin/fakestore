import { SubmitHandler, useForm } from 'react-hook-form';
import { PageTitle } from '../components/shared/PageTitle';

interface IFormValues {
  firstName: string;
  email: string;
  emailText: string;
}

const ContactsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    defaultValues: { firstName: '', email: '', emailText: '' },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };

  return (
    <main className="ms-container">
      <PageTitle>Kontaktai</PageTitle>
      <form
        className="max-w-sm rounded-lg border p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-2 justify-self-end">
              <label htmlFor="firstName">Vardas</label>
            </div>
            <div className="col-span-7">
              <input
                className="w-full border border-slate-400 p-2 rounded-md"
                type="text"
                id="firstName"
                autoComplete="on"
                {...register('firstName', {
                  required: 'Pamiršote įvesti savo vardą',
                })}
              />
            </div>
          </div>
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-2 justify-self-end">
              <label htmlFor="email">El. paštas</label>
            </div>
            <div className="col-span-7">
              <input
                className="w-full border border-slate-400 p-2 rounded-md"
                type="email"
                id="email"
                autoComplete="on"
                {...register('email', {
                  required: 'Pamiršote įrašyti el. pašto adresą',
                })}
              />
            </div>
          </div>
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-2 justify-self-end">
              <label htmlFor="emailText">Tekstas</label>
            </div>
            <div className="col-span-7">
              <textarea
                className="w-full rounded-md border border-slate-400 p-1"
                id="emailText"
                rows={3}
                {...register('emailText', {
                  required: 'Laiško tekstas privalomas',
                })}
              />
            </div>
          </div>
          <button className="btn-generic bg-slate-500 text-slate-50 hover:bg-slate-600">
            Siųsti
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactsPage;
