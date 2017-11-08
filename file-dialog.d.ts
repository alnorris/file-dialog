declare interface FileDialogOptions {
	multiple?: boolean;
	accept?: string;
}
declare function fileDialog(): Promise<FileList>;
declare function fileDialog( callback: ( files: FileList ) => void ): Promise<FileList>;
declare function fileDialog( options: FileDialogOptions, callback?: ( files: FileList ) => void ): Promise<FileList>;
export = fileDialog;
export as namespace fileDialog;
