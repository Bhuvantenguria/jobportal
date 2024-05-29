import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    loading : boolean,
}

export default function LoadinButton({
    children ,
    loading ,
    ...props
}: LoadingButtonProps){
    return (
        <Button {...props} disabled={props.disabled || loading} >
            <span className="flex items-center justify-center gap-1">
                {loading && <Loader2 size={16} className="animated-spin" />}
                {children}

            </span>

        </Button>
    )
}