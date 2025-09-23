import FilterSidebar from "@/components/filter-side-bar";

export default function Layout({ children }) {
    return (
        <div className="flex items-start px-10 gap-10 max-h-[90vh] overflow-hidden ">
            <FilterSidebar  />
            {children}
        </div>
    )
}