import Social from "./Social";


export default function Footer() {
  return (
    <>
      <section className='py-4 bg-primary text-lightPink'>
        <div className='text-center min-w-min w-50 mx-auto'>
          <p>🌿 Handled with care 💻 </p>
          <p>Copyright 2023</p>
          <p>Bramantyo</p>
        </div>
        <Social/>
      </section>
    </>
  );
}
