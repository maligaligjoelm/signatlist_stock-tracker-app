'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

import {usePathname, useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import NavItems from "@/components/NavItems";
import {LogOut} from "lucide-react";

const UserDropdown = () => {

    const router = useRouter();
    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = {name: 'Joel', email: 'hi@mjoelm.com'};

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-400">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 font-bold text-sm">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md-flex flex-col item-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2 ">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png"/>
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 font-bold text-sm">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-400">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className=" bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
                <DropdownMenuSeparator className="sm:hidden bg-gray-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;