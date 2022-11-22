#include <stdio.h>  
#include <stdlib.h>


#define M 50
#define N 30

int A[M+1][N+1],m,n,i,j;

int main()
{
		printf("nr linii si coloane:\n");
		if(scanf("%d%d",&m,&n)!=2||m>M||m<=0||n>N||n<=0)
		{
			printf("nu e bine sefu");
			exit(1);
		}
		
		printf("baga elementele:\n");
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
			{
				printf("A[%d][%d]= ",i,j);
				if(scanf("%d",&A[i][j])!=1)
				{
					printf("nu e bine sefu");
					exit(1);
				}
			}
		}
		
		printf("\nMatricea e:\n");
		
		for(i=0;i<m;i++)
		{
			for(j=0;j<n;j++)
			{
				printf("%d\t",A[i][j]);
			}
			printf("\n");
		}
		
}