import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <h2 className="text-primary-200 text-2xl font-semibold mt-4">
        Loading cabins...
      </h2>
    </div>
  );
}
