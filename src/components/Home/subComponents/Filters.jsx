import Select from "../../lib/select";

const Filters = () => {
  return (
    <div className="filterContainer">
      <Select name="Role" options="" value="" onChange="" />
      <Select name="Tech stack" options="" value="" onChange="" />
      <Select name="Min experience" options="" value="" onChange="" />
      <Select name="Location" options="" value="" onChange="" />
      <Select name="Remote/on-site" options="" value="" onChange="" />
      <Select name="Min base pay" options="" value="" onChange="" />
      <input name="Company name" />
    </div>
  );
};

export default Filters;
