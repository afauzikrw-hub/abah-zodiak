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
  name: z.string().min(1, "Please enter your name").max(50, "Name must be less than 50 characters"),
  birthDate: z.date({
    required_error: "Please select your birth date",
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
            Discover Your Cosmic Identity
          </h2>
          <p className="text-muted-foreground mt-2">
            Enter your details to reveal your zodiac sign and daily horoscope
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
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
                  <FormLabel className="text-foreground font-medium">Date of Birth</FormLabel>
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
                            <span>Pick your birth date</span>
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
              Reveal My Cosmic Destiny ✨
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}