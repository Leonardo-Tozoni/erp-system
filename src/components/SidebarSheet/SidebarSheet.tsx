'use client';
import { CalendarIcon, HomeIcon, Link, LogOutIcon } from "lucide-react";
import Image from 'next/image';
import { Button } from "../ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

export default function SideBarSheet() {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* <div className="py-5 flex justify-between items-center border-b border-solid gap-3">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ''} />
            </Avatar>
            <div>
              <p className="font-bold">{data?.user.name}</p>
              <p className="text-xs">{data?.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-lg">
                <DialogHeader>
                  <DialogTitle>Faça login na plataforma</DialogTitle>
                  <DialogDescription>
                    Conecte-se usando sua conta do Google
                  </DialogDescription>
                  <Button
                    variant="outline"
                    className="flex gap-2 font-bold"
                    onClick={handleLoginWithGoogle}
                  >
                    <Image
                      alt="Logo do google"
                      src="/google.svg"
                      width={18}
                      height={18}
                    />
                    Google
                  </Button>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </>
        )}
      </div> */}

      <div className="py-5 flex flex-col gap-2 border-b border-solid">
        <SheetClose asChild>
          <Button variant="ghost" className="gap-2 justify-start" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button variant="ghost" className="gap-2 justify-start">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>

      <div className="py-5 flex flex-col gap-2 border-b border-solid">
          <Button
            // key={option.title}
            variant="ghost"
            className="gap-2 justify-start"
          >
            <Image
            alt="titulo"
            height={18}
            width={18} src={""}            />
            Titulo
          </Button>
      </div>

      <div className="py-5 flex flex-col gap-2 border-b border-solid">
        <Button
          variant="ghost"
          className="justify-start gap-2"
          // onClick={handleSignOut}
        >
          <LogOutIcon size={18} />
          Sair
        </Button>
      </div>
    </SheetContent>
  );
};
