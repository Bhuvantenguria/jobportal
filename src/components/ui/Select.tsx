import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react"; 
import { forwardRef } from "react";

export default forwardRef<
HTMLSelectElement,
React.HTMLProps<HTMLSelectElement>
>(function Select({className , ...props}, ref){
    return (
        <div className="relative">
            <select className={cn("h-10 w-full appearance-none truncate rounded-md border border-input" , className,)}
            ref={ref}
            {...props} />

            <ChevronDown className="absolute right-3top-3 h-4 w-4 opacity-50" />

        </div>
    )
})