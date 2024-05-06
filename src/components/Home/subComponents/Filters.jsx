import Select from "../../ui/select";

const Filters = ({ filters, setFilters }) => {
  const role = ["frontend", "ios", "android", "backend"];
  const minExp = [1, 2, 4, 8];
  const isRemote = ["remote", "on-site"];
  const location = ["delhi", "mumbai", "chennai", "bangalore"];
  const minPay = [10, 20, 40, 60];

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filterContainer">
      <Select
        name="Role"
        options={role}
        value={filters["role"]}
        onChange={(value) => handleFilterChange("role", value)}
      />
      <Select name="Tech stack" options={[]} value="" onChange="" />
      <Select
        name="Min experience"
        options={minExp}
        value={filters["minExp"]}
        onChange={(value) => handleFilterChange("minExp", value)}
      />
      <Select
        name="Location"
        options={location}
        value={filters["location"]}
        onChange={(value) => handleFilterChange("location", value)}
      />
      <Select
        name="Remote/on-site"
        options={isRemote}
        value={filters["isRemote"]}
        onChange={(value) => handleFilterChange("isRemote", value)}
      />
      <Select
        name="Min base pay"
        options={minPay}
        value={filters["minPay"]}
        onChange={(value) => handleFilterChange("minPay", value)}
      />
      <input
        name="Company name"
        placeholder="Company name"
        className="filterSearch"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, ["companyName"]: e.target.value }))
        }
        value={filters["companyName"] || ""}
      />
    </div>
  );
};

export default Filters;
