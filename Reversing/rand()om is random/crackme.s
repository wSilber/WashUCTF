	.file	"crackme.c"
	.section	.text.unlikely,"ax",@progbits
.LCOLDB0:
	.text
.LHOTB0:
	.globl	checkPass
	.type	checkPass, @function
checkPass:
	pushl	%ebp
	movl	%esp, %ebp
	pushl	%ebx
	xorl	%ebx, %ebx
	subl	$20, %esp
	movb	$-48, -16(%ebp)
	movb	$-58, -15(%ebp)
	movb	$-56, -14(%ebp)
	movb	$109, -13(%ebp)
	movb	$60, -12(%ebp)
	movb	$-5, -11(%ebp)
	movb	$-60, -10(%ebp)
	movb	$-60, -9(%ebp)
.L3:
	call	rand
	movl	$255, %ecx
	cltd
	idivl	%ecx
	movl	8(%ebp), %eax
	movsbl	(%eax,%ebx), %ecx
	movzbl	-16(%ebp,%ebx), %eax
	movzbl	%dl, %edx
	xorl	%ecx, %edx
	cmpl	%eax, %edx
	jne	.L4
	incl	%ebx
	cmpl	$8, %ebx
	jne	.L3
	movl	$1, %eax
	jmp	.L2
.L4:
	xorl	%eax, %eax
.L2:
	addl	$20, %esp
	popl	%ebx
	popl	%ebp
	ret
	.size	checkPass, .-checkPass
	.section	.text.unlikely
.LCOLDE0:
	.text
.LHOTE0:
	.section	.rodata.str1.1,"aMS",@progbits,1
.LC1:
	.string	"Usage: %s <password>\n"
.LC2:
	.string	"Incorrect password length"
.LC3:
	.string	"Incorrect password"
.LC4:
	.string	"Congratulations!"
	.section	.text.unlikely
.LCOLDB5:
	.section	.text.startup,"ax",@progbits
.LHOTB5:
	.globl	main
	.type	main, @function
main:
	leal	4(%esp), %ecx
	andl	$-16, %esp
	pushl	-4(%ecx)
	pushl	%ebp
	movl	%esp, %ebp
	pushl	%edi
	pushl	%ecx
	cmpl	$2, (%ecx)
	movl	4(%ecx), %eax
	je	.L9
	pushl	%edx
	pushl	(%eax)
	pushl	$.LC1
	pushl	$1
	call	__printf_chk
	jmp	.L14
.L9:
	movl	4(%eax), %edx
	orl	$-1, %ecx
	xorl	%eax, %eax
	movl	%edx, %edi
	repnz scasb
	cmpl	$-10, %ecx
	je	.L11
	subl	$12, %esp
	pushl	$.LC2
.L15:
	call	puts
.L14:
	addl	$16, %esp
	movl	$1, %eax
	jmp	.L10
.L11:
	subl	$12, %esp
	pushl	%edx
	call	checkPass
	addl	$16, %esp
	testl	%eax, %eax
	jne	.L12
	subl	$12, %esp
	pushl	$.LC3
	jmp	.L15
.L12:
	subl	$12, %esp
	pushl	$.LC4
	call	puts
	addl	$16, %esp
	xorl	%eax, %eax
.L10:
	leal	-8(%ebp), %esp
	popl	%ecx
	popl	%edi
	popl	%ebp
	leal	-4(%ecx), %esp
	ret
	.size	main, .-main
	.section	.text.unlikely
.LCOLDE5:
	.section	.text.startup
.LHOTE5:
	.ident	"GCC: (Ubuntu 5.4.0-6ubuntu1~16.04.4) 5.4.0 20160609"
	.section	.note.GNU-stack,"",@progbits
