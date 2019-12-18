declare interface FileDialogOptions {
	readonly multiple?: boolean;
	readonly accept?: string|ReadonlyArray<string>;
}
declare function fileDialog(): Promise<FileList>;
declare function fileDialog( callback: ( files: FileList ) => void ): Promise<FileList>;
declare function fileDialog( options: FileDialogOptions, callback?: ( files: FileList ) => void ): Promise<FileList>;
export = fileDialog;
export as namespace fileDialog;
