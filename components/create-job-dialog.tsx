import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/Button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface CreateJobApplicationsDialogProps {
        columnId: string;
        boardId: string;
}

export default function CreateJobApplicationsDialog({ columnId, boardId }: CreateJobApplicationsDialogProps) {
        return (
                <Dialog>
                        <DialogTrigger>
                                <Button>
                                        <Plus />
                                        Add Job
                                </Button>
                        </DialogTrigger>
                        <DialogContent>
                                <DialogHeader>
                                        <DialogTitle>
                                                Add Job Application
                                        </DialogTitle>
                                        <DialogDescription>Track a job application</DialogDescription>
                                </DialogHeader>
                                <form className="space-y-4">
                                        <div className="space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                                <Label htmlFor="company"> Company *</Label>
                                                                <Input id="company" required />
                                                        </div>
                                                        <div className="space-y-2">
                                                                <Label htmlFor="position"> Position *</Label>
                                                                <Input id="position" required />
                                                        </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                                <Label htmlFor="location"> Location </Label>
                                                                <Input id="location" />
                                                        </div>
                                                        <div className="space-y-2">
                                                                <Label htmlFor="salary"> Salary </Label>
                                                                <Input id="salary" placeholder="e.g: $100k-$200k" />
                                                        </div>
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="jobUrl" > Job URL </Label>
                                                        <Input id="jobUrl" placeholder="http://" />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="tags"> Tags (comma-seperated) </Label>
                                                        <Input id="tags" placeholder="Data, Web, AI, ML " />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="description"> Description </Label>
                                                        <Textarea id="description" rows={3} placeholder="Breif Description..." />
                                                </div>
                                                <div className="space-y-2">
                                                        <Label htmlFor="notes"> Notes </Label>
                                                        <Textarea id="notes" rows={4} />
                                                </div>
                                        </div>
                                        <DialogFooter>
                                                <Button type="button" variant="outline">Cancel</Button>
                                                <Button type="submit">App Application</Button>
                                        </DialogFooter>
                                </form>
                        </DialogContent>
                </Dialog>
        );
}