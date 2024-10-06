function Address({ paragraph, address, svg }) {
  return (
    <div className="mb-8 flex w-[330px] max-w-full">
      <div className="mr-6 text-[32px] text-primary">{svg}</div>
      <div>
        <h5 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {address}
        </h5>
        <p className="text-base text-body-color dark:text-dark-6">
          {paragraph}
        </p>
      </div>
    </div>
  );
}

export default Address;
