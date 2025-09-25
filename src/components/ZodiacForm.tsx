import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(1, "Silakan masukkan nama Anda").max(50, "Nama harus kurang dari 50 karakter"),
  birthDate: z.date({
    required_error: "Silakan pilih tanggal lahir Anda",
  }),
});

interface ZodiacFormProps {
  onSubmit: (data: { name: string; birthDate: Date }) => void;
}

export function ZodiacForm({ onSubmit }: ZodiacFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit({
      name: values.name,
      birthDate: values.birthDate
    });
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 shadow-card">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            Temukan Identitas Kosmik Anda
          </h2>
          <p className="text-muted-foreground mt-2">
            Masukkan detail Anda untuk mengungkap zodiak dan ramalan harian Anda
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Nama Anda</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan nama Anda"
                      {...field}
                      className="bg-input/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-foreground font-medium">Tanggal Lahir</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal bg-input/50 border-border/50 hover:bg-input/70 transition-colors",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pilih tanggal lahir Anda</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-popover/95 backdrop-blur-sm border-border/50" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-cosmic hover:shadow-glow transition-all duration-300 font-semibold"
            >
              Ungkap Takdir Kosmik Saya ✨
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}